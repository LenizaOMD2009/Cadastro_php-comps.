<?php

namespace app\controller;

class Cliente extends Base
{
    public function lista($request, $response)
    {
        $dadosTemplate = [
            'titulo' => 'Lista de cliente'
        ];
        return $this->getTwig()
            ->render($response, $this->setView('listcliente'), $dadosTemplate)
            ->withHeader('Content-Type', 'text/html')
            ->withStatus(200);
    }
    public function cadastro($request, $response) 
    {
        $dadosTemplate = [
            'titulo' => 'Cadastro de cliente'
        ];
        return $this->getTwig()
            ->render($response, $this->setView('cadastrocliente'), $dadosTemplate)
            ->withHeader('Content-Type', 'text/html')
            ->withStatus(200);
    }
}
