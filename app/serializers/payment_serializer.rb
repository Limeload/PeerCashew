class PaymentSerializer < ActiveModel::Serializer
  attributes :id, :loan_id, :amount, :scheduled_date, :paid_date, :status
  belongs_to :payer, serializer: UserSerializer
end
