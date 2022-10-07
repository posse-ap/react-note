<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Note;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        Note::factory()->createMany([
            [
                'title' => 'engineed',
                'body'  => <<<TEXT
                    engineedは、AWSエンジニア特化型のスカウトサービスです。
                    公式資格を有しているAWSエンジニアを副業や正社員など様々な契約形態で採用することができます。
                    TEXT,
            ],
            [
                'title' => 'SaaSus Platform',
                'body'  => 'BtoB SaaSを作ることを支援するSaaS。',
            ],
            [
                'title' => 'SaaSus Consulting',
                'body'  => '組織内製化診断から実行までを包括的に支援するサービス。',
            ],
            [
                'title' => 'Gateway',
                'body'  => <<<TEXT
                    様々な企業に対して、ソフトウェア開発の支援事業を行なっております。
                    これまで、上場企業の自社プロダクトとしてSaaSの開発やメディアの開発で培った経験から、 主にWebサービスの開発経験に強みがあります。
                    また、インフラ構築の技術にも定評があります。
                    TEXT,
            ],
            [
                'title' => 'HarborS',
                'body'  => <<<TEXT
                    表参道のエンジニア特化型コミュニティスペース。
                    コワーキング会員のみならず、ドロップインの利用も可能。
                    渋谷からも近い距離にあり、多くのエンジニアにとって、足を運びやすい場所に位置しています。
                    勉強会やイベントも多数開催中。
                    TEXT,
            ],
            [
                'title' => 'POSSE',
                'body'  => <<<TEXT
                    プログラミング未経験の大学生が仲間と共に学ぶコミュニティ。
                    大学生のうちから、「人格」+「プログラミング」を学ぶコミュニティを形成し、将来に渡って長期的に人生を豊かにし合う仲間を熟成します。
                    また、それにより新卒就職時に即戦力人材を目指します。
                    TEXT,
            ],
        ]);
    }
}
