class AddMalIdToGenre < ActiveRecord::Migration[6.1]
  def change
    add_column :genres, :mal_id, :text

  end
end
