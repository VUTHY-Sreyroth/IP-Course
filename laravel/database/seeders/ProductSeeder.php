<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'name' => 'Product A1',
            'category_id' => 1,
            'pricing' => 300,
        ]);
        Product::create([
            'name' => 'Product B1',
            'category_id' => 2,
            'pricing' => 500,
        ]);
    }
}
