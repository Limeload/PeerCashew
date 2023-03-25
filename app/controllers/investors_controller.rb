class InvestorsController < ApplicationController
  before_action :set_investor, only: [:show, :edit, :update, :destroy]

  def index
    investors = Investor.all
    render json: investors, status: :ok
  end

  def show
    user_id = params[:id]
    investor_data = Investor.where(lender_id: params[:id])
    render json: investor_data, status: :ok
  end

  def new
    @user = User.find(params[:user_id])
    @investor = @investor.investors.build
  end

  def create
    investor = Investor.create!(investor_params)
    investor.lender_id = @current_user.id
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
      params.require(:investor).permit(:user_id, :loan_id, :investment_amount, :interest_rate, :status).merge(lender: @current_user)
    end
end
