<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TaskController extends AbstractController
{
    #[Route('/task', name: 'app_task_list')]
    public function list(): Response
    {
        return $this->render("task/list.html.twig");
    }

    #[Route("/task/{id}", name: 'app_task_view')]
    public function view(int $id): Response
    {
        return $this->render("task/view.html.twig");
    }

    #[Route("/task/create", name: 'app_task_create', methods: ["GET", "POST"])]
    public function create(Request $request): Response
    {
        return $this->render("task/form.html.twig");
    }

    #[Route("/task/update/{id}", name: "app_task_update", methods: ["GET", "PUT"])]
    public function update(int $id, Request $request): Response
    {
        return $this->render("task/form.html.twig");
    }

    #[Route("/task/delete/{id}", name: "app_task_delete", methods: ["DELETE"])]
    public function delete(): Response
    {
        return $this->redirectToRoute("app_task_view",);
    }
}
