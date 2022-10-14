class User < ApplicationRecord
    has_secure_password

    has_many :favorites 
    has_many :comments

    # ʚ♥ɞ Returns an array of follows for the given user instance 
    has_many  :received_follows, foreign_key: :followee_id, class_name: "Follow"

    # ʚ♥ɞ Returns an array of users who follow (followers) for the given userinstance 
    has_many  :followers, through: :recved_follows, source: :follower

    # ʚ♥ɞ Returns an array of follows a user carries 
    has_many :given_follows, foreign_key: :follower_id, class_name: "Follow"
    
    # ʚ♥ɞ Returns an array of other users who the user has followed   
    has_many :followings, through: :given_follows, source: :followee

    

    validates :username, presence: true, uniqueness: true 
    validates :password, presence: true

end
