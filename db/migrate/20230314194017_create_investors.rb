class CreateInvestors < ActiveRecord::Migration[7.0]
  def change
    create_table :investors do |t|
      t.references :lender, null: false, foreign_key: { to_table: :users }
      t.references :loan, null: false, foreign_key: true
      t.decimal :investment_amount, precision: 10, scale: 2
      t.decimal :interest_rate, precision: 5, scale: 2
      t.string :status
    end
  end
end
