class Genre < ApplicationRecord
    
    belongs_to :anime, optional: true 

end
