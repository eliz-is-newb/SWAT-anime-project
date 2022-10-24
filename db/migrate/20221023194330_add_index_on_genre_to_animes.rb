class AddIndexOnGenreToAnimes < ActiveRecord::Migration[6.1]
  disable_ddl_transaction!

  def change
    add_index :animes, :genre, algorithm: :concurrently
  end
end
