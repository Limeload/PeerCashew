class PaymentsController < ApplicationController
  before_action :set_loan
  before_action :set_payment, only: [:show, :update, :destroy]

  def index
    render json: @loan.payments, status: :ok
  end

  def show
    render json: @payment, status: :ok
  end

  def create
    payment = @loan.payments.create!(payment_params.merge(payer: @current_user))
    LoanMailer.payment_received(@loan, payment).deliver_later
    render json: payment, status: :created
  end

  def update
    @payment.update!(payment_params)
    if @payment.status == "paid" && @payment.paid_date.nil?
      @payment.update!(paid_date: Date.today)
    end
    render json: @payment, status: :ok
  end

  def destroy
    @payment.destroy
    head :no_content
  end

  private

  def set_loan
    @loan = Loan.find(params[:loan_id])
  end

  def set_payment
    @payment = @loan.payments.find(params[:id])
  end

  def payment_params
    params.require(:payment).permit(:amount, :scheduled_date, :paid_date, :status)
  end
end
