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

ActiveRecord::Schema[7.0].define(version: 2023_03_15_052200) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "investors", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "loan_id", null: false
    t.decimal "investment_amount", precision: 10, scale: 2
    t.decimal "interest_rate", precision: 5, scale: 2
    t.string "status"
    t.index ["loan_id"], name: "index_investors_on_loan_id"
    t.index ["user_id"], name: "index_investors_on_user_id"
  end

  create_table "loans", force: :cascade do |t|
    t.bigint "borrower_id", null: false
    t.string "title"
    t.string "description"
    t.decimal "amount", precision: 10, scale: 2, null: false
    t.decimal "interest_rate", precision: 4, scale: 2, null: false
    t.integer "term_length", null: false
    t.integer "status", default: 0, null: false
    t.index ["borrower_id"], name: "index_loans_on_borrower_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "name"
    t.string "date_of_birth"
    t.string "address"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "investors", "loans"
  add_foreign_key "investors", "users"
  add_foreign_key "loans", "users", column: "borrower_id"
end
