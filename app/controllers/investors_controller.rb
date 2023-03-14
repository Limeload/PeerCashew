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
    investor = Investor.new(investor_params)
    if investor.save
      render json: investor, status: :created
    else
      render json: { errors: investor.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if investor.update!(investor_params)
      render json: investor, status: :ok
    else
      render json: { errors: investor.errors.full_messages }, status: :unprocessable_entity
    end
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
      params.require(:investor).permit(:user_id, :loan_id, :investment_amount, :interest_rate, :status)
    end
end
