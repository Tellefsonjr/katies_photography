class Appointment < ApplicationRecord
  before_save :default_values
  def default_values
    self.userName ||= 'Teej'
  end
end
