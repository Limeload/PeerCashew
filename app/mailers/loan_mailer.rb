class LoanMailer < ApplicationMailer
  default from: "notifications@lendsphere.io"

  def loan_created(loan)
    @loan = loan
    @borrower = loan.borrower
    mail(to: @borrower.email, subject: "Your LendSphere loan request has been submitted")
  end

  def loan_status_changed(loan)
    @loan = loan
    @borrower = loan.borrower
    mail(to: @borrower.email, subject: "Your loan status has changed to #{loan.status.capitalize}")
  end

  def investment_received(loan, investor)
    @loan = loan
    @investor = investor
    @borrower = loan.borrower
    mail(to: @borrower.email, subject: "New investment received on your LendSphere loan")
  end

  def payment_received(loan, payment)
    @loan = loan
    @payment = payment
    mail(to: loan.borrower.email, subject: "Payment of $#{payment.amount} recorded for your loan")
  end

  def payment_due_reminder(loan, payment)
    @loan = loan
    @payment = payment
    @borrower = loan.borrower
    mail(to: @borrower.email, subject: "Reminder: Payment due on #{payment.scheduled_date}")
  end
end
