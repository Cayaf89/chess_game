@extends('layouts.app')

@push('scripts')
    <script src='{{ mix('js/views/game.js') }}' defer ></script>
@endpush

@push('css')
    <link href="{{ mix('css/views/game.css') }}" rel="stylesheet">
@endpush

@section('content')
<div id="game-container" class="game-container d-flex align-items-center justify-content-center">
    <game-component></game-component>
</div>
@endsection
