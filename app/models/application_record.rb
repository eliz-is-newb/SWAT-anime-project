class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  require 'rest-client'
  require 'json' 


end               
