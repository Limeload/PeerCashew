# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_14_160530) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "investments", force: :cascade do |t|
    t.bigint "lender_id", null: false
    t.bigint "loan_id", null: false
    t.decimal "amount"
    t.decimal "interest_rate"
    t.string "status"
    t.index ["lender_id"], name: "index_investments_on_lender_id"
    t.index ["loan_id"], name: "index_investments_on_loan_id"
  end

  create_table "loans", force: :cascade do |t|
    t.bigint "borrower_id", null: false
    t.string "title"
    t.string "description"
    t.decimal "amount"
    t.decimal "interest_rate"
    t.integer "duration"
    t.string "status"
    t.index ["borrower_id"], name: "index_loans_on_borrower_id"
  end

  create_table "payments", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "loan_id"
    t.bigint "investment_id"
    t.decimal "amount"
    t.date "payment_date"
    t.string "status"
    t.index ["investment_id"], name: "index_payments_on_investment_id"
    t.index ["loan_id"], name: "index_payments_on_loan_id"
    t.index ["user_id"], name: "index_payments_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "name"
    t.date "date_of_birth"
    t.string "profile_picture_url"
    t.string "address"
  end

  add_foreign_key "investments", "loans"
  add_foreign_key "investments", "users", column: "lender_id"
  add_foreign_key "loans", "users", column: "borrower_id"
  add_foreign_key "payments", "investments"
  add_foreign_key "payments", "loans"
  add_foreign_key "payments", "users"
end
