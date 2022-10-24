class RemoveColumnFromAnimes < ActiveRecord::Migration[6.1]
  def change
    remove_column :animes, :genre

  end
end
