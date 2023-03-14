class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      log_in user
      render json: { status: :ok, message: "Logged in successfully", user: user }, status: :ok
    else
      render json: { status: :unauthorized, message: "Invalid email/password combination" }, status: :unauthorized
    end
  end

  def destroy
    log_out
    render json: { status: :ok, message: "Logged out successfully" }, status: :ok
  end
end
