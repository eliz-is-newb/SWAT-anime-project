class Episode < ApplicationRecord
    belongs_to  :anime, optional: true 
    has_many    :comments
end
