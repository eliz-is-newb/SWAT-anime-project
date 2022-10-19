class AddMalIdToEpisodes < ActiveRecord::Migration[6.1]
  def change
    add_column :episodes, :mal_id, :integer
  end
end
