class CreatePayments < ActiveRecord::Migration[7.0]
  def change
    create_table :payments do |t|
      t.references :user, null: false, foreign_key: { to_table: :users }
      t.references :loan, foreign_key: true
      t.references :investment, foreign_key: true
      t.decimal :amount
      t.date :payment_date
      t.string :status
    end
  end
end
