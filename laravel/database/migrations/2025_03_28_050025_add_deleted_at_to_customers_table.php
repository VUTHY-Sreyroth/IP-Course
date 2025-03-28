<?php   
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDeletedAtToCustomersTable extends Migration
{
  
    public function up(): void
    {
        Schema::table('customers', function (Blueprint $table) {
            $table->softDeletes();  // This will add the 'deleted_at' column
        });
    }

  
    public function down(): void
    {
        Schema::table('customers', function (Blueprint $table) {
            $table->dropSoftDeletes();  // Removes 'deleted_at' column if rolling back
        });
    }
}