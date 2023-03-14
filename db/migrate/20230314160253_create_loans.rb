class CreateLoans < ActiveRecord::Migration[7.0]
  def change
    create_table :loans do |t|
      t.references :borrower, null: false, foreign_key: { to_table: :users }
      t.string :title
      t.string :description
      t.decimal :amount
      t.decimal :interest_rate
      t.integer :duration
      t.string :status
    end
  end
end
