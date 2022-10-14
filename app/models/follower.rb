class Follower < ApplicationRecord

    # ʚ♥ɞ the user giving the follow
    belongs_to :follower, foreign_key:  :follower_id, class_name: "User"

    # ʚ♥ɞ the user being followed 
    belongs_to :followee, foreign_key:  :followee_id, class_name: "User"

end
