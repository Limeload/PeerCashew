class InvestmentSerializer < ActiveModel::Serializer
  attributes :id, :amount, :status
  has_one :user_id
  has_one :loan_id
end
