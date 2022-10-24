class User < ApplicationRecord
 
     



    has_many :favorites 
    has_many :comments

    #  Returns an array of follows for the given user instance 
    has_many  :received_follows, foreign_key: :followee_id, class_name: "Follower"

    # Returns an array of users who follow (followers) for the given userinstance 
    has_many  :followers, through: :received_follows, source: :follower

    #  Returns an array of follows a user carries 
    has_many :given_follows, foreign_key: :follower_id, class_name: "Follower"
    
    # Returns an array of other users who the user has followed   
    has_many :followings, through: :given_follows, source: :followee

    

    validates :username, presence: true, uniqueness: true 
    
    has_secure_password

end
