class LoansController < ApplicationController
  before_action :set_loan, only: [:show, :edit, :update, :destroy]

  def index
    loans = Loan.all
    render json: loans, status: :ok
  end

  def show
  end

  def new
    render json: {}, status: :ok
  end

  def create
    loan = Loan.create!(loan_params)
    loan.borrower_id = current_user.id
    render json: loan, status: :created
  end


  def edit
  end

  def update
     loan.update!(loan_params)
     render json: loan, status: :ok
  end


  def destroy
    loan.destroy
    head :no_content
  end


  private

  def set_loan
    loan = Loan.find(params[:id])
  end

  def loan_params
    params.permit(:title, :description, :amount, :interest_rate, :term_length)
  end
end
