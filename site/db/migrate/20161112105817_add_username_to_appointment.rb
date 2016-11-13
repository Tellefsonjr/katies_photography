class AddUsernameToAppointment < ActiveRecord::Migration[5.0]
  def change
    add_column :appointments, :userName, :string
    add_column :appointments, :string, :string
  end
end
