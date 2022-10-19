class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :episode_id, :text
  belongs_to :user, class_name: 'user', foreign_key: 'user_id'
  
end
