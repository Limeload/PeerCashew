class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :me, :show, :index, :profile, :investors, :loans]

  # Logged in user's Investors
  def investors
    @investors = Investor.where(lender_id: params[:id])
    render json: @investors
  end

  # Logged in user's Loans
  def loans
    @loans = Loan.where(borrower_id: params[:id])
    render json: @loans
  end

  # List all users
  def index
  users = User.all
  render json: users, status: :ok
  end

  # Show a logged in user
  def me
    @current_user = User.find_by(id: params[:id])
    render json: @current_user, include: ['loans', 'investors'], status: :ok
  end

  # Show a specific user
  def show
    @current_user = User.find_by(id: params[:id])
    render json: @current_user, status: :ok
  end

  # Create a new user
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    cookies.signed[:user_id] = user.id
    render json: user, status: :created
  end

  # Update a user
  def update
    user = User.find_by(id: params[:id])
    user.update!(user_params)
    render json: user, status: :ok
  end

  # User's profile
  def profile
    @user = current_user
  end

  # Delete a user
  def destroy
    user = User.find_by(id: params[:id])
    user.destroy
  end

  private

  def user_params
    params.permit(:email, :password, :password_confirmation, :name, :date_of_birth, :address)
  end

end
