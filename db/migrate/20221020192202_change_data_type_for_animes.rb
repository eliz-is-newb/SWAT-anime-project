class ChangeDataTypeForAnimes < ActiveRecord::Migration[6.1]
  def change
    change_column :animes, :mal_id, :string 
  end
end
