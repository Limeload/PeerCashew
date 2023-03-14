class CreateInvestments < ActiveRecord::Migration[7.0]
  def change
    create_table :investments do |t|
      t.references :lender, null: false, foreign_key: { to_table: :users }
      t.references :loan, null: false, foreign_key: true
      t.decimal :amount
      t.decimal :interest_rate
      t.string :status
    end
  end
end
