class LoansController < ApplicationController
  before_action :set_loan, only: [:show, :update, :destroy, :transition]

  def index
    loans = Loan.all
    loans = loans.where(status: params[:status]) if params[:status].present?
    loans = loans.where("amount >= ?", params[:min_amount]) if params[:min_amount].present?
    loans = loans.where("amount <= ?", params[:max_amount]) if params[:max_amount].present?
    loans = loans.where("interest_rate >= ?", params[:min_rate]) if params[:min_rate].present?
    loans = loans.where("interest_rate <= ?", params[:max_rate]) if params[:max_rate].present?
    loans = loans.where(term_length: params[:term_length]) if params[:term_length].present?
    render json: loans, status: :ok
  end

  def show
    render json: @loan
  end

  def create
    loan = Loan.create!(loan_params)
    LoanMailer.loan_created(loan).deliver_later
    render json: loan, status: :created
  end

  def update
    @loan.update!(loan_params)
    render json: @loan, status: :ok
  end

  def transition
    new_status = params[:status]
    if @loan.can_transition_to?(new_status)
      @loan.transition_to!(new_status)
      LoanMailer.loan_status_changed(@loan).deliver_later
      render json: @loan, status: :ok
    else
      render json: { error: "Cannot transition from '#{@loan.status}' to '#{new_status}'" }, status: :unprocessable_entity
    end
  end

  def destroy
    @loan.destroy
    head :no_content
  end

  private

  def set_loan
    @loan = Loan.find(params[:id])
  end

  def loan_params
    params.require(:loan).permit(:title, :description, :amount, :interest_rate, :term_length, :status).merge(borrower: @current_user)
  end
end
