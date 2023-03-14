class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :name
      t.date :date_of_birth
      t.string :profile_picture_url
      t.string :address
    end
  end
end
