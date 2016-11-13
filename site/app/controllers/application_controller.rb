class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  def index
    @appointments = Appointment.all
  end
end
