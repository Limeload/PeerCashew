class ApplicationController < ActionController::Base
  include ActionController::Cookies
  protect_from_forgery with: :exception
  before_action :require_login

  private

  def require_login
    unless logged_in?
      render json: { error: "You must be logged in to access this section" }, status: :unauthorized
    end
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
  helper_method :current_user

  def logged_in?
    current_user != nil
  end
  helper_method :logged_in?
end
