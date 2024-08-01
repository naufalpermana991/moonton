<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 10000,
                'active_period_in_months' => 1,
                'features' => json_encode([
                    'feature1',
                    'feature2',
                    'feature3',
                ]),
            ],
            [
                'name' => 'Premium',
                'price' => 30000,
                'active_period_in_months' => 6,
                'features' => json_encode([
                    'feature1',
                    'feature2',
                    'feature3',
                    'feature4',
                    'feature5',
                    'feature6',
                ]),
            ],
        ];

        SubscriptionPlan::insert($subscriptionPlans);
    }
}
