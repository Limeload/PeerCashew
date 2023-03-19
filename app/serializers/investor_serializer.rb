class InvestorSerializer < ActiveModel::Serializer
  attributes :id, :investment_amount, :status
  has_one :user_id
  has_one :loan_id
end
