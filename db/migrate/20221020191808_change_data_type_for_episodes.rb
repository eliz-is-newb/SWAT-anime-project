class ChangeDataTypeForEpisodes < ActiveRecord::Migration[6.1]
  def change
    change_column :episodes, :mal_id, :string 
  end
end
