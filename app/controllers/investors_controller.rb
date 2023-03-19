class InvestorsController < ApplicationController
  before_action :set_investor, only: [:show, :edit, :update, :destroy]

  def index
    investors = Investor.all
    render json: investors, status: :ok
  end

  def show
    render json: investor, status: :ok
  end

  def new
    investor = Investor.new
  end

  def create
    investor = Investor.create!(investor_params)
    render json: investor, status: :created
  end

  def edit
  end

  def update
   investor.update!(investor_params)
   render json: investor, status: :ok
  end

  def destroy
    loan = investor.loan
    investor.destroy
    render json: { message: "Investment deleted successfully" }, status: :ok
  end

  private
    def set_investor
      investor = Investor.find(params[:id])
    end

    def investor_params
      params.permit(:user_id, :loan_id, :investment_amount, :interest_rate, :status)
    end
end
