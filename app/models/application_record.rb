class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  require "activerecord-import/base"
ActiveRecord::Import.require_adapter("SQLite3")
end
