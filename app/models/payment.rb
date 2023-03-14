class Payment < ApplicationRecord
  belongs_to :user
  belongs_to :loan, optional: true
  belongs_to :investment, optional: true

end
