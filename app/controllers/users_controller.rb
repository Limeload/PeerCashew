class UsersController < ApplicationController
  # List all users
  def index
  users = User.all
  render json: users, status: :ok
  end

  # Show a specific user
  def show
    user = User.find_by(id: params[:id])
    if user
      render json: user
    else
      render json: {error: 'User not found', status: 404}
    end
  end

  # Create a new user
  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: 201
    else
      render json: {error: user.errors.full_messages.join(',')}, status: 422
    end
  end

  # Update a user
  def update
    user = User.find_by(id: params[:id])
    if user
      if user.update!(user_params)
        render json: user
      else
        render json: { error: user.errors.full_messages.join(',') }, status: 422
      end
    else
      render json: { error: 'User not found' }, status: 404
    end
  end


  # Delete a user
  def destroy
    user = User.find_by(id: params[:id])
    if user
      user.destroy
      head :no_content
    else
      render json: { error: 'User not found' }, status: 404
    end
  end

  private

  def user_params
    params.permit(:email, :password, :name, :date_of_birth, :address)
  end

end
