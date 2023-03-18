class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :me, :index]

  # List all users
  def index
  users = User.all
  render json: users, status: :ok
  end

  # Show a specific user
  def me
    render json: @current_user, status: :ok
  end

  # Create a new user
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  # Update a user
  def update
    user = User.find_by(id: params[:id])
    user.update!(user_params)
    render json: user, status: :ok
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
