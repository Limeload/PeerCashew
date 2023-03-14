class PaymentSerializer < ActiveModel::Serializer
  attributes :id, :amount, :payment_date, :status
  has_one :investor_id
  has_one :loan_id
end
