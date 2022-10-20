class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :bio 
  has_many :favorites 
  has_many :comments 
end
