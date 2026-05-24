class CreatePayments < ActiveRecord::Migration[7.0]
  def change
    create_table :payments do |t|
      t.references :loan, null: false, foreign_key: true
      t.references :payer, null: false, foreign_key: { to_table: :users }
      t.decimal :amount, precision: 10, scale: 2, null: false
      t.date :scheduled_date, null: false
      t.date :paid_date
      t.string :status, null: false, default: "scheduled"
    end
  end
end
