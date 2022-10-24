class Anime < ApplicationRecord
 
    has_many :favorites 
    has_many :episodes 
    has_many :genres 

end