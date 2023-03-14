class CreateLoans < ActiveRecord::Migration[7.0]
  def change
    create_table :loans do |t|
      t.references :borrower, null: false, foreign_key: { to_table: :users }
      t.string :title
      t.string :description
      t.decimal :amount, precision: 10, scale: 2, null: false
      t.decimal :interest_rate, precision: 4, scale: 2, null: false
      t.integer :term_length, null: false
      t.integer :status, null: false, default: 0
    end
  end
end
