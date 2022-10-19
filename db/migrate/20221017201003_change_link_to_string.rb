class ChangeLinkToString < ActiveRecord::Migration[6.1]
  def change
    change_column :episodes, :link, :string
  end
end
