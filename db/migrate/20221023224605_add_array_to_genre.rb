class AddArrayToGenre < ActiveRecord::Migration[6.1]
  def change
    add_column :genres, :genres, :string, array: true, default: []

  end
end
