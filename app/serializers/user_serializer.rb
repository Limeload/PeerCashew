class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :name, :date_of_birth, :profile_picture_url, :address
end
